import React, { useState, useMemo, useRef } from 'react';
import onionData from "@/data/onion.json";

// ---------- TypeScript Interfaces ----------
export interface Wedge {
  id: string;
  label: string;
  description: string;
  span: number;
  isHinge?: boolean;
}

export interface Ring {
  id: string;
  label: string;
  color: string;
  textColor: string;
  description: string;
  wedges: Wedge[];
}

export interface RingGeometry extends Ring {
  rInner: number;
  rOuter: number;
}

interface Point {
  x: number;
  y: number;
}

const RINGS: Ring[] = onionData as Ring[];

const CENTER = 340;
const RING_WIDTH = 52;
const CORE_RADIUS = 70;
const GAP = 3;

// ---------- Helper Functions ----------
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number): Point {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx: number, cy: number, rInner: number, rOuter: number, startAngle: number, endAngle: number): string {
  const p1 = polarToCartesian(cx, cy, rOuter, startAngle);
  const p2 = polarToCartesian(cx, cy, rOuter, endAngle);
  const p3 = polarToCartesian(cx, cy, rInner, endAngle);
  const p4 = polarToCartesian(cx, cy, rInner, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return [
    `M ${p1.x} ${p1.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${p4.x} ${p4.y}`,
    'Z',
  ].join(' ');
}

// ---------- Main React Component ----------
export function OnionDiagram() {
  // Master State: We only need to track the Active Ring and the current Slider Index inside it!
  const [activeRing, setActiveRing] = useState<string | null>(null);
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const infoBoxRef = useRef<HTMLDivElement>(null);

  const ringGeometry = useMemo<RingGeometry[]>(() => {
    let rInner = CORE_RADIUS;
    return RINGS.map((ring) => {
      const rOuter = ring.id === 'core' ? CORE_RADIUS : rInner + RING_WIDTH;
      const geo: RingGeometry = { ...ring, rInner, rOuter };
      rInner = rOuter + GAP;
      return geo;
    });
  }, []);

  // Determine active dataset for the info panel
  const currentRingObj = useMemo(() => {
    if (!activeRing) return null;
    return RINGS.find(r => r.id === activeRing) || null;
  }, [activeRing]);

  const selectedDetail = useMemo(() => {
    if (!currentRingObj) return null;
    const activeWedgeObj = currentRingObj.wedges[sliderIndex] || currentRingObj.wedges[0];
    return {
      label: activeWedgeObj.label,
      description: activeWedgeObj.description,
      ringLabel: currentRingObj.id === 'core'
        ? currentRingObj.label
        : `${currentRingObj.label} (${sliderIndex + 1} of ${currentRingObj.wedges.length})`,
      ringColor: currentRingObj.color,
      totalWedges: currentRingObj.wedges.length
    };
  }, [currentRingObj, sliderIndex]);

  // UNIFIED CLICK HANDLERS (Works for both SVG slices and Legend buttons)
  const handleSelectWedge = (ringId: string, targetWedgeIndex: number) => {
    setActiveRing(ringId);
    setSliderIndex(targetWedgeIndex);
    scrollToInfo();
  };

  const handleSelectRingButton = (ringId: string) => {
    if (activeRing === ringId) {
      setActiveRing(null);
    } else {
      setActiveRing(ringId);
      setSliderIndex(0); // Snap to first component of newly selected ring
    }
    scrollToInfo();
  };

  const nextSlide = () => {
    if (currentRingObj) {
      setSliderIndex((prev) => (prev + 1) % currentRingObj.wedges.length);
    }
  };

  const prevSlide = () => {
    if (currentRingObj) {
      setSliderIndex((prev) => (prev - 1 + currentRingObj.wedges.length) % currentRingObj.wedges.length);
    }
  };

  const scrollToInfo = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 960) {
      setTimeout(() => {
        infoBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  return (
    <div className="onion-master-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Mono:wght@400;500;600&family=EB+Garamond:wght@400;500&display=swap');
        
        .onion-master-container {
          background: #0f0c09;
          min-height: 100vh;
          padding: 48px 24px;
          font-family: "EB Garamond", Georgia, serif;
          color: #ebe2cb;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          width: 100%;
          overflow-x: hidden;
        }

        .onion-header {
          text-align: center;
          margin-bottom: 32px;
          width: 100%;
        }

        .onion-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr; /* MASSIVE DESKTOP SVG RATIO */
          gap: 56px;
          align-items: center;
          width: 100%;
          max-width: 1280px;
        }

        .onion-svg-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .onion-svg {
          width: 100%;
          max-width: 620px; /* BUMPED FROM 540px */
          max-height: 72vh;
          height: auto;
          user-select: none;
        }

        .onion-right-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .onion-info-card {
          background: #1f1b0d;
          border: 1px solid rgba(200, 132, 29, 0.28);
          border-radius: 4px;
          padding: 32px;
          min-height: 320px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .onion-legend-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          width: 100%;
        }

        .wedge { cursor: pointer; transition: all 0.25s ease; }
        .wedge:hover { filter: brightness(1.18); }
        .wedge-label { font-family: 'DM Mono', monospace; pointer-events: none; user-select: none; }
        .hinge-line { stroke-dasharray: 3 4; }

        .slider-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-t: 1px solid rgba(235, 226, 203, 0.12);
          padding-top: 16px;
          margin-top: 20px;
        }

        .slider-btn {
          background: rgba(235, 226, 203, 0.08);
          border: 1px solid rgba(235, 226, 203, 0.22);
          color: #ebe2cb;
          padding: 8px 16px;
          border-radius: 2px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.15s;
        }
        .slider-btn:hover { 
          background: #ebe2cb; 
          color: #0f0c09; 
        }

        /* RESPONSIVE MOBILE BREAKPOINT */
        @media (max-width: 960px) {
          .onion-master-container { padding: 24px 14px; }
          .onion-grid { grid-template-columns: 1fr; gap: 28px; width: 100%; }
          .onion-svg { max-width: 100%; max-height: 50vh; }
          .onion-info-card { min-height: 260px; padding: 22px; }
          .onion-legend-container { justify-content: center; }
        }
      `}</style>

      {/* Header */}
      <header className="onion-header">
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.3em', color: '#c8841d', marginBottom: 6 }}>
          KIBO &middot; GURUMB&Eacute; CAPITAL
        </div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 38, fontWeight: 500, margin: 0, color: '#ebe2cb' }}>
          The Architecture of the Product
        </h1>
        <p style={{ fontSize: 15, color: '#a89878', maxWidth: 540, margin: '8px auto 0', lineHeight: 1.5 }}>
          Read from the inside out. Click any layer on the diagram or use the controls to inspect the financial plumbing.
        </p>
      </header>

      {/* Main Grid */}
      <div className="onion-grid">

        {/* Left Column: Interactive Diagram */}
        <div className="onion-svg-wrapper">
          <svg
            className="onion-svg"
            viewBox="40 40 600 600"
            role="img"
            aria-label="Concentric ring diagram of KIBO real estate architecture"
          >
            {/* DEFINITIONS: Generate skeleton arc paths for curved text rendering */}
            <defs>
              {ringGeometry.map((ring) => {
                if (ring.id === 'core') return null;
                const totalSpan = ring.wedges.reduce((s, w) => s + w.span, 0);
                let cursor = -90;
                const sliceAngle = 360 / totalSpan;
                const rMid = (ring.rInner + ring.rOuter) / 2;

                return ring.wedges.map((wedge) => {
                  const startA = cursor;
                  const endA = cursor + sliceAngle * wedge.span;
                  cursor = endA;

                  // Sweep inversion: If arc is in bottom half, draw right-to-left so text flips upright!
                  const midA = (startA + endA) / 2;
                  const isBottom = midA > 90 && midA < 270;

                  const pStart = polarToCartesian(CENTER, CENTER, rMid, startA);
                  const pEnd = polarToCartesian(CENTER, CENTER, rMid, endA);

                  const dPath = isBottom
                    ? `M ${pEnd.x} ${pEnd.y} A ${rMid} ${rMid} 0 0 0 ${pStart.x} ${pStart.y}`
                    : `M ${pStart.x} ${pStart.y} A ${rMid} ${rMid} 0 0 1 ${pEnd.x} ${pEnd.y}`;

                  return <path key={`def_${wedge.id}`} id={`arc_${wedge.id}`} d={dPath} />;
                });
              })}
            </defs>

            {/* RENDER RING WEDGES */}
            {ringGeometry.map((ring) => {
              const isThisRingActive = activeRing === ring.id;
              const isAnyActive = Boolean(activeRing);
              const ringDimmed = isAnyActive && !isThisRingActive;

              const totalSpan = ring.wedges.reduce((s, w) => s + w.span, 0);
              let cursor = -90;
              const sliceAngle = 360 / totalSpan;

              return (
                <g key={ring.id} opacity={ringDimmed ? 0.35 : 1}>
                  {ring.wedges.map((wedge, wIdx) => {
                    const startAngle = cursor;
                    const endAngle = cursor + sliceAngle * wedge.span;
                    cursor = endAngle;

                    // Specific Wedge Highlight Logic
                    const isThisWedgeActive = isThisRingActive && sliderIndex === wIdx;
                    const strokeColor = isThisWedgeActive ? '#EBE2CB' : '#0f0c09';
                    const strokeWidth = isThisWedgeActive ? 3.5 : 1.5;
                    const fillOpacity = isThisWedgeActive ? 1 : (isThisRingActive ? 0.82 : 0.92);

                    const path = ring.id === 'core'
                      ? `M ${CENTER} ${CENTER - ring.rOuter} A ${ring.rOuter} ${ring.rOuter} 0 1 1 ${CENTER - 0.01} ${CENTER - ring.rOuter} Z`
                      : arcPath(CENTER, CENTER, ring.rInner, ring.rOuter, startAngle, endAngle);

                    return (
                      <path
                        key={wedge.id}
                        className="wedge"
                        d={path}
                        fill={ring.color}
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        opacity={fillOpacity}
                        onClick={() => handleSelectWedge(ring.id, wIdx)}
                      />
                    );
                  })}
                </g>
              );
            })}

            {/* RENDER CURVED LABELS */}
            {ringGeometry.map((ring) => {
              const isThisRingActive = activeRing === ring.id;
              const isAnyActive = Boolean(activeRing);

              return ring.wedges.map((wedge, wIdx) => {
                const isThisWedgeActive = isThisRingActive && sliderIndex === wIdx;
                const labelOpacity = !isAnyActive ? 1 : (isThisRingActive ? (isThisWedgeActive ? 1 : 0.75) : 0.35);

                // CORE CIRCLE: Standard Stacked & Centered Text
                if (ring.id === 'core') {
                  return (
                    <g key={`${wedge.id}_text`} opacity={labelOpacity} onClick={() => handleSelectWedge(ring.id, 0)} style={{ cursor: 'pointer' }}>
                      <text x={CENTER} y={CENTER - 10} fill={ring.textColor} fontSize={20} fontWeight={600} textAnchor="middle" className="wedge-label">
                        African
                      </text>
                      <text x={CENTER} y={CENTER + 14} fill={ring.textColor} fontSize={20} fontWeight={600} textAnchor="middle" className="wedge-label">
                        Real Estate
                      </text>
                    </g>
                  );
                }

                // ALL OTHER RINGS: Curved TextPath hugging the arc
                const fontSize = ring.wedges.length > 5 ? 11 : 13.5;

                return (
                  <text
                    key={`${wedge.id}_text`}
                    fill={ring.textColor}
                    fontSize={fontSize}
                    fontWeight={isThisWedgeActive ? 600 : 500}
                    opacity={labelOpacity}
                    className="wedge-label"
                    dominantBaseline="central"
                    dy="0.1em" // Micro-nudge to perfectly center on SVG path
                  >
                    <textPath href={`#arc_${wedge.id}`} startOffset="50%" textAnchor="middle">
                      {wedge.label.length > 20 ? wedge.label.split(' / ')[0] : wedge.label}
                    </textPath>
                  </text>
                );
              });
            })}

            {/* HINGE CONNECTOR */}
            {(() => {
              const enablersRing = ringGeometry.find((r) => r.id === 'enablers');
              const liquidityRing = ringGeometry.find((r) => r.id === 'liquidity');
              if (!enablersRing || !liquidityRing) return null;
              const hingeIdx = enablersRing.wedges.findIndex((w) => w.isHinge);
              const totalSpan = enablersRing.wedges.reduce((s, w) => s + w.span, 0);
              const sliceAngle = 360 / totalSpan;
              const startAngle = -90 + sliceAngle * hingeIdx;
              const midAngle = startAngle + sliceAngle / 2;
              const innerPt = polarToCartesian(CENTER, CENTER, enablersRing.rOuter + 14, midAngle);
              const outerPt = polarToCartesian(CENTER, CENTER, liquidityRing.rInner - 4, midAngle);
              const isHingeFocused = activeRing === 'liquidity' || (activeRing === 'enablers' && sliderIndex === hingeIdx);

              return (
                <g opacity={isHingeFocused ? 1 : 0.45}>
                  <line className="hinge-line" x1={outerPt.x} y1={outerPt.y} x2={innerPt.x} y2={innerPt.y} stroke="#ebe2cb" strokeWidth={1.5} />
                  <circle cx={innerPt.x} cy={innerPt.y} r={3} fill="#ebe2cb" />
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Right Column: Dynamic Info Card + Legend */}
        <div className="onion-right-column" ref={infoBoxRef}>

          <div className="onion-info-card">
            {selectedDetail ? (
              <>
                <div>
                  <div style={{ display: 'inline-block', fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: selectedDetail.ringColor, border: `1px solid ${selectedDetail.ringColor}`, borderRadius: 2, padding: '3px 8px', marginBottom: 14 }}>
                    {selectedDetail.ringLabel.toUpperCase()}
                  </div>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 30, fontWeight: 500, margin: '0 0 12px', color: '#ebe2cb' }}>
                    {selectedDetail.label}
                  </h2>
                  <p style={{ fontSize: 16.5, lineHeight: 1.6, color: '#d7c3b0', margin: 0 }}>
                    {selectedDetail.description}
                  </p>
                </div>

                {/* SLIDER NAVIGATION (Visible if active ring has > 1 components) */}
                {selectedDetail.totalWedges > 1 && (
                  <div className="slider-controls">
                    <button onClick={prevSlide} className="slider-btn">&larr; Previous</button>
                    <span style={{ fontFamily: 'DM Mono', fontSize: 11.5, color: '#a89878', fontWeight: 500 }}>
                      Component {sliderIndex + 1} of {selectedDetail.totalWedges}
                    </span>
                    <button onClick={nextSlide} className="slider-btn">Next Component &rarr;</button>
                  </div>
                )}
              </>
            ) : (
              <div style={{ color: '#a89878', fontSize: 15.5, lineHeight: 1.6 }}>
                <p style={{ margin: '0 0 12px' }}>Click any layer on the diagram or select a ring below to inspect the KIBO protocol mechanics.</p>
                <p style={{ margin: 0, fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.06em', color: '#7a6228' }}>
                  CORE &rarr; TOKENIZED ASSETS &rarr; FEATURES &rarr; ENABLERS &rarr; LIQUIDITY
                </p>
              </div>
            )}
          </div>

          {/* Ring Selector Menu */}
          <nav className="onion-legend-container" aria-label="Product rings selector">
            {RINGS.map((ring) => {
              const isActive = activeRing === ring.id;
              return (
                <button
                  key={ring.id}
                  onClick={() => handleSelectRingButton(ring.id)}
                  style={{
                    background: isActive ? ring.color : 'transparent',
                    color: isActive ? (ring.textColor === '#171306' ? '#171306' : '#ebe2cb') : '#a89878',
                    border: `1px solid ${ring.color}`,
                    borderRadius: 3,
                    padding: '8px 12px',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: 11.5,
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    flex: '1 1 auto',
                    textAlign: 'center'
                  }}
                >
                  {ring.label.toUpperCase()}
                </button>
              );
            })}
          </nav>

        </div>

      </div>
    </div>
  );
}

export default OnionDiagram;