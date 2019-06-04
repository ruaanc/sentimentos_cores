function SexoDAO(connection){
    this._connection = connection;
}
SexoDAO.prototype.salvarSexo = (data, callback) => {
    console.log(data);
    this._connection.query('insert into sexo ? ',data, callback);
}