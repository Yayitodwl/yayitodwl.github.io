// Datos para la gráfica de línea
var dataLine = [
    { year: '2008', value: 20 },
    { year: '2009', value: 10 },
    { year: '2010', value: 5 },
    { year: '2011', value: 5 },
    { year: '2012', value: 20 }
];
// Configuración de la gráfica de línea
Morris.Line({
    element: 'line-chart',
    data: dataLine,
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value']
});
// Datos para la gráfica de área
var dataArea = [
    { year: '2008', value: 20 },
    { year: '2009', value: 10 },
    { year: '2010', value: 5 },
    { year: '2011', value: 5 },
    { year: '2012', value: 20 }
];
// Configuración de la gráfica de área
Morris.Area({
    element: 'area-chart',
    data: dataArea,
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value']
});
