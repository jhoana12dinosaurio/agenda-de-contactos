function ThemeToggle() {
  // TODO: Implementar cambio de tema claro/oscuro (Ejercicio 4.6)
  
  const handleToggle = () => {
    console.log('TODO: Cambiar tema')
  }

  return (
    <button onClick={handleToggle} className="theme-toggle">
      {/* TODO: Cambiar ícono/texto según el tema actual (Ejercicio 4.6) */}
      Tema
    </button>
  )
}

export default ThemeToggle