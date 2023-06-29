
function IrArriba() {
  const handleScrollToTop = () => {
    // Lógica para desplazarse hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={handleScrollToTop}>ARRIBA</button>
      {/* Resto del contenido del componente */}
    </div>
  );
}

export default IrArriba;
