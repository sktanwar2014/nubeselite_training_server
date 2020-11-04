const env = 'prod';

console.log('env db', env);


let DbName = 'nubeselite_training';
let domainName;
let mailPass = '';
let mailService = '';

if(env==='prod'){
  DbName = 'nubeselite_training';
  domainName = 'nubeselite.training';
}else{
  DbName = 'sargatech_trOaining'
  domainName = 'localhost:5000';
}


module.exports = { DbName: DbName, domainName: domainName, mailPass: mailPass, mailService: mailService, env: env };
