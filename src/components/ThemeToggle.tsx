function ThemeToggle() {
  const handleToggle = () => {
    console.log('Cambiar tema')
  }

  return (
    <button onClick={handleToggle} className="theme-toggle">
      Tema
    </button>
  )
}

export default ThemeToggle