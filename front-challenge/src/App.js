import React from 'react';
import Grid from '@mui/material/Grid';

import Layout from "./components/Layout";
import ContentBox from "./components/molecules/ContentBox/ContentBox";

function App() {
	return (
		<Layout pageTitle="Configuración">
			<Grid container columnSpacing={10}>
				<Grid item xs>
					<ContentBox
						title="Nuevo Ejercicio"
						description="Generar el nuevo Ejercicio fiscal para el presupuesto." />

					<ContentBox
						title="Anteproyecto"
						description="Administrar la información de Anteproyectos." />

					<ContentBox
						title="Clasificadores Primarios"
						description="Administrar la información de los clasificadores primarios."
						links={["Clasificador Institucional", "Estructura Programatica", "Recursos por Rubro", "Gastos por Objeto", "Fuentes de Financiamiento"]}/>

					<ContentBox
						title="Clasificadores Agregados"
						description="Administrar la información de los Clasificadores Agregados." 
						links={["Recursos por Origen y Procedencia", "Recursos por Carácter Económico", "Gastos por Finalidad y Función", "Gastos por Carácter Económico"]}/>

					<ContentBox
						title="Reglas Presupuestarias"
						description="Administrar la información de Reglas Presupuestarias para la etapa de Formulación y Programación." />
				</Grid>
				<Grid item xs>
					<ContentBox
						title="Categorías Programáticas"
						description="Administrar la información de Categorías Programáticas." />

					<ContentBox
						title="Unidades Ejecutoras"
						description="Administrar la información de Unidades Ejecutoras." />

					<ContentBox
						title="Causas de Desvíos"
						description="Administrar la información de las Causas Operativas, Financieras y conclusiones."
						links={["Financieras", "Operativas", "Conclusiones"]}/>

					<ContentBox
						title="Tablas Referenciales"
						description="Administrar la información de las Tablas Referenciales del Módulo Presupuesto."
						links={["Unidades de Medida", "Gastos Prioritarios", "Motivos Reglas Presupuestarias"]}/>
				</Grid>
			</Grid>
		</Layout>
	)
}

export default App;