import React from 'react';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: 'icon' | 'badge' | 'full';
};

export const FeedbackWallLogo: React.FC<Props> = ({ size = 'md', className = '', style = 'icon' }) => {
  const dimensions = {
    sm: { dim: 24, fontSize: 10, textSize: 8 },
    md: { dim: 32, fontSize: 14, textSize: 10 },
    lg: { dim: 48, fontSize: 20, textSize: 14 },
  };

  const { dim, fontSize, textSize } = dimensions[size];

  // Product Badge Style
  if (style === 'badge') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div
          style={{
            width: dim,
            height: dim,
            backgroundColor: '#0a0a0a',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
        >
          <span
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: '700',
              color: '#ffffff',
              fontFamily: "'Geist', -apple-system, sans-serif",
              letterSpacing: '-0.5px',
            }}
          >
            FW
          </span>
        </div>
        {size !== 'sm' && (
          <div>
            <div
              style={{
                fontSize: `${textSize + 2}px`,
                fontWeight: '700',
                color: 'currentColor',
                fontFamily: "'Geist', -apple-system, sans-serif",
                lineHeight: '1.2',
              }}
            >
              FeedbackWall
            </div>
            <div
              style={{
                fontSize: `${textSize - 2}px`,
                color: 'rgba(0, 0, 0, 0.5)',
                fontFamily: "'Geist', -apple-system, sans-serif",
              }}
            >
              Feedback Hub
            </div>
          </div>
        )}
      </div>
    );
  }

  // Icon Only Style (product logo)
  return (
    <div
      style={{
        width: dim,
        height: dim,
        backgroundColor: '#0a0a0a',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      }}
      className={className}
    >
      <span
        style={{
          fontSize: `${fontSize * 0.7}px`,
          fontWeight: '700',
          color: '#ffffff',
          fontFamily: "'Geist', -apple-system, sans-serif",
          letterSpacing: '-0.5px',
        }}
      >
        FW
      </span>
    </div>
  );
};

export default FeedbackWallLogo;
