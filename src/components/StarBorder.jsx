import './StarBorder.css';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  variant = 'transparent', // 'transparent' | 'solid' | 'ghost'
  fillColor, // optional override for solid fill
  textColor, // optional override for text color
  children,
  ...rest
}) => {
  const fill = fillColor ?? (variant === 'solid' ? '#ffffff' : 'transparent')
  const text = textColor ?? (variant === 'solid' ? '#000000' : '#ffffff')

  const innerStyle = {
    background: fill,
    color: text,
    border: variant === 'solid' ? 'none' : '1px solid rgba(124,58,237,0.12)',
    backdropFilter: variant === 'ghost' ? 'blur(6px)' : undefined
  }

  return (
    <Component
      className={`star-border-container ${className} ${variant === 'solid' ? 'variant-solid' : variant === 'ghost' ? 'variant-ghost' : ''}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content" style={innerStyle}>{children}</div>
    </Component>
  );
};

export default StarBorder;
