const carros = [
    { nome: 'Corolla', ano: 2020 },
    { nome: 'Civic', ano: 2012 },
    { nome: 'Prisma', ano: 2015 },
    { nome: 'Golf', ano: 2009 },
    { nome: 'Celta', ano: 2006 }
  ];
  
  const carrospos2010 = carros.filter(carro => carro.ano > 2010);
  
  console.log(carrospos2010);
  