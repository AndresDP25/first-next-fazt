import styles from "../styles/Footer.module.css"
import Link from "next/link"


const Footer = () => {
  return (
	<footer className={styles.footer}>
		<div className={`contenedor ${styles.contenido}`}>
			<nav className={styles.navegacion}>
				<Link href='/'>Inicio</Link>
				<Link href='/about'>About</Link>
				<Link href='/services'>Services</Link>
			</nav>
			<p className={styles.copyright}>Todos los derechos reservados</p>
		</div>
	</footer>
  )
}

export default Footer