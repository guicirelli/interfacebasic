export default function CtaButton({ children, variant = "primary", onClick, href }) {
  const baseClasses = "btn cursor-pointer";
  const variantClasses = variant === "primary" 
    ? "btn-primary" 
    : "btn-outline";
  
  const className = `${baseClasses} ${variantClasses}`;
  
  if (href) {
    return <a href={href} className={className}>{children}</a>;
  }
  
  return <button onClick={onClick} className={className}>{children}</button>;
}

