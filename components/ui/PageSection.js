export default function PageSection({ 
  id, 
  title, 
  subtitle, 
  bgColor = "bg-white",
  vPadding = "py-16 md:py-24",
  hPadding = "px-4 md:px-8",
  children 
}) {
  return (
    <section id={id} className={`${bgColor} ${vPadding}`}>
      <div className={`max-w-7xl mx-auto ${hPadding}`}>
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

