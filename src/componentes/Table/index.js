/* eslint-disable react/jsx-pascal-case */
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

import {
  DialogActions,
  DialogContent,
  DialogTitle,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./style.css";
import { IoMdAddCircleOutline } from "react-icons/io";

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

  const table = useMaterialReactTable({
    columns,
    data,
    //Tradução Abaixo, clica na setinha pra esconder
    localization: {
      actions: "Ações",
      and: "e",
      cancel: "Cancelar",
      changeFilterMode: "Alterar o modo de filtro",
      changeSearchMode: "Alterar o modo de pesquisa",
      clearFilter: "Limpar filtros",
      clearSearch: "Limpar pesquisa",
      clearSelection: "Limpar seleção",
      clearSort: "Limpar classificações",
      clickToCopy: "Clique para copiar",
      copy: "Copiar",
      collapse: "Recolher",
      collapseAll: "Recolher tudo",
      columnActions: "Ações das colunas",
      copiedToClipboard: "Copiado para área de transferência",
      dropToGroupBy: "Solte para agrupar por {column}",
      edit: "Editar",
      expand: "Expandir",
      expandAll: "Expandir tudo",
      filterArrIncludes: "Inclui",
      filterArrIncludesAll: "Incluir tudo",
      filterArrIncludesSome: "Inclui alguns",
      filterBetween: "Entre",
      filterBetweenInclusive: "Entre valores incluídos",
      filterByColumn: "Filtrar por {column}",
      filterContains: "Contém",
      filterEmpty: "vazio",
      filterEndsWith: "Termina com",
      filterEquals: "Igual",
      filterEqualsString: "Igual",
      filterFuzzy: "Impreciso",
      filterGreaterThan: "Maior que",
      filterGreaterThanOrEqualTo: "Maior ou igual que",
      filterInNumberRange: "Entre",
      filterIncludesString: "Contém",
      filterIncludesStringSensitive: "Contém",
      filterLessThan: "Menor que",
      filterLessThanOrEqualTo: "Menor ou igual que",
      filterMode: "Modo de filtro: {filterType}",
      filterNotEmpty: "Não é vazio",
      filterNotEquals: "Não é igual",
      filterStartsWith: "Começa com",
      filterWeakEquals: "Igual",
      filteringByColumn: "Filtrando por {column} - {filterType} {filterValue}",
      goToFirstPage: "Ir para a primeira página",
      goToLastPage: "Ir para a última página",
      goToNextPage: "Ir para a próxima página",
      goToPreviousPage: "Ir para a página anterior",
      grab: "Agarrar",
      groupByColumn: "Agrupar por {column}",
      groupedBy: "Agrupado por ",
      hideAll: "Ocultar tudo",
      hideColumn: "Ocultar coluna {column}",
      max: "Max",
      min: "Min",
      move: "Mover",
      noRecordsToDisplay: "Não há registros a serem exibidos",
      noResultsFound: "Nenhum resultado encontrado",
      of: "de",
      or: "ou",
      pin: "Fixar",
      pinToLeft: "Fixar à esquerda",
      pinToRight: "Fixar à direita",
      resetColumnSize: "Restaurar tamanho da coluna",
      resetOrder: "Restaurar ordem",
      rowActions: "Ações da linha",
      rowNumber: "#",
      rowNumbers: "Número da linha",
      rowsPerPage: "Linhas por página",
      save: "Salvar",
      search: "Pesquisar",
      selectedCountOfRowCountRowsSelected:
        "{selectedCount} de {rowCount} linha(s) selecionada(s)",
      select: "Selecionar",
      showAll: "Mostrar tudo",
      showAllColumns: "Mostrar todas as colunas",
      showHideColumns: "Mostrar/Ocultar colunas",
      showHideFilters: "Mostrar/Ocultar filtros",
      showHideSearch: "Mostrar/Ocultar barra de pesquisa",
      sortByColumnAsc: "Ordenar por {column} em ascendente",
      sortByColumnDesc: "Ordenar por {column} em descendente",
      sortedByColumnAsc: "Ordenado por {column} em ascendente",
      sortedByColumnDesc: "Ordenado por {column} em descendente",
      thenBy: ", depois por ",
      toggleDensity: "Alternar densidade",
      toggleFullScreen: "Alternar tela cheia",
      toggleSelectAll: "Alternar selecionar tudo",
      toggleSelectRow: "Alternar seleção da linha",
      toggleVisibility: "Alternar visibilidade",
      ungroupByColumn: "Desagrupar por {column}",
      unpin: "Desfixar",
      unpinAll: "Desfixar tudo",
    },
    enableEditing: true,
    enableSorting: false,
    editDisplayMode: "modal",
    createDisplayMode: "modal",
    initialState: { showColumnFilters: true, showGlobalFilter: true },
    onCreatingRowSave: ({ table, values }) => {
      table.setCreatingRow(null);
    },
    onCreatingRowCancel: () => {},
    renderTopToolbarCustomActions: ({ table }) => (
      <button
        className="AddNewVeic"
        onClick={() => {
          table.setCreatingRow(true);
        }}
      >
        <IoMdAddCircleOutline size={20} /> Adicionar
      </button>
    ),
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle
          variant="h4"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
            fontSize: 25,
          }}
        >
          Adicionando novo veículo
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
  });

  return (
    <ThemeProvider theme={createTheme({ typography: { fontSize: 19 } })}>
      {/* Só diminuir o maxWidth pra mudar o tamanho da tabela*/}
      <div style={{ maxWidth: "10000px", padding: "0px", margin: "0 auto" }}>
        <MaterialReactTable columns={columns} table={table} />
      </div>
    </ThemeProvider>
  );
};

export default Table;
