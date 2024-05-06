import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { ThemeProvider, createTheme } from "@mui/material";
import "./style.css";

const data = [
  {
    plate: "123457345",
    model: "Modelo do Carro1251",
    type: "Tipo do Carro5213",
    maintenance: "NÃO",
    driver: "Nome do Motorista6993",
  },
  {
    plate: "241347693",
    model: "Modelo do Carro4372",
    type: "Tipo do Carro7123",
    maintenance: "SIM",
    driver: "Nome do Motorista1241",
  },
  {
    plate: "856856931",
    model: "Modelo do Carro7652",
    type: "Tipo do Carro3458",
    maintenance: "SIM",
    driver: "Nome do Motorista7689",
  },
  {
    plate: "745846243",
    model: "Modelo do Carro235",
    type: "Tipo do Carro5321",
    maintenance: "NÃO",
    driver: "Nome do Motorista6332",
  },
  {
    plate: "523738645",
    model: "Modelo do Carro4642",
    type: "Tipo do Carro8973",
    maintenance: "NÃO",
    driver: "Nome do Motorista4322",
  },
  {
    plate: "151743786",
    model: "Modelo do Carro8762",
    type: "Tipo do Carro6424",
    maintenance: "SIM",
    driver: "Nome do Motorista3161",
  },
  {
    plate: "12415abc5",
    model: "Modelo do Carro ABCE",
    type: "Tipo do Carro 123AF",
    maintenance: "NÃO",
    driver: "Nome do Motorista3213",
  },
];

const Table = () => {
  const columns = [
    {
      accessorKey: "plate",
      header: "PLACA",
      size: 150,
    },
    {
      accessorKey: "model",
      header: "MODELO",
      size: 150,
    },
    {
      accessorKey: "type",
      header: "TIPO",
      size: 150,
    },
    {
      accessorKey: "maintenance",
      header: "EM MANUTENÇÃO",
      size: 150,
    },
    {
      accessorKey: "driver",
      header: "MOTORISTA",
      size: 150,
    },
  ];

  return (
    <ThemeProvider theme={createTheme({ typography: { fontSize: 18 } })}>
      <div style={{ maxWidth: "1260px", padding: "80px", margin: "0 auto" }}>
        <MaterialReactTable
          columns={columns}
          data={data}
          localization={MRT_Localization_PT_BR}
          enableEditing
          enableColumnPinning
          initialState={{ showColumnFilters: true, showGlobalFilter: true }}
          enableSorting={false}
        />
      </div>
    </ThemeProvider>
  );
};

export default Table;
