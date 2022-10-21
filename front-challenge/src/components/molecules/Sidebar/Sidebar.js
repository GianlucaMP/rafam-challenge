import React from "react";
import Logo from "../../atoms/Sidebar/Logo"
import Footer from "../../atoms/Sidebar/Footer"
import ButtonSidebar from "../../atoms/Buttons/ButtonSidebar";
import SubButtonSidebar from "../../atoms/Buttons/SubButtonSidebar";
import WeekWeather from "../WeekWeather/WeekWeather";

import "./Sidebar.css";

const Sidebar = () => {

	return (
		<div className="sidebar">
			<p className="sidebarText">
				Desarrollado por RAFAM 2021<br/>
				v4.12.3
			</p>

			<hr />

			<Logo />

			<div className="buttonsContainer">
				<ButtonSidebar text="Inicio" />

				<ButtonSidebar text="Presupuesto" selected />
					<SubButtonSidebar selected text="Configuración" />
					<SubButtonSidebar text="Formulación Presupuestaria" />
					<SubButtonSidebar text="Modificación Presupuestaria" />
					<SubButtonSidebar text="Programación Fisica" />
					<SubButtonSidebar text="Reportes" />

				<ButtonSidebar text="CAS" expandible />
				
				<ButtonSidebar text="Planificación" expandible />
				
				<ButtonSidebar text="Contrataciones" expandible />
				
				<ButtonSidebar text="Portal" expandible />
				
				<ButtonSidebar text="Contabilidad" expandible />
				
				<ButtonSidebar text="Tesoreria" expandible />
				
				<ButtonSidebar text="Bienes Fisicos" expandible />
				
				<ButtonSidebar text="Inversión Pública" expandible />
				
				<ButtonSidebar text="Crédito Publico" expandible />
				
				<ButtonSidebar text="Ingresos Públicos" expandible />
				
				<ButtonSidebar text="Recursos Humanos" expandible />

			</div>

			<WeekWeather />

			<hr />

			<Footer />
		</div>
	);
}

export default Sidebar;