import Link from "next/link"
import styles from "../styles/Header.module.css"
import Image from 'next/image'

const Header = () => {
  return (
	<header className={styles.header}>
		<div className="contenedor">
			<div className={styles.barra}>
				<Link href='/'>
					<Image width={350} height={100} src='/img/logo.png' alt="imagen - logo" />
				</Link>
				<nav className={styles.navegacion}>
					<Link href='/'>Inicio</Link>
					<Link href='/about'>About</Link>
					<Link href='/services'>Services</Link>
				</nav>
			</div>
		</div>
	</header>
  )
}

export default Header