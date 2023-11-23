import {pool} from "../db.js";//usuario libro

//GET
export const getUsuarios = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Usuarios');
        res.json(rows);
    
    } catch (error) {
     return res.status(500).json({message: 'No jalo'});
    }
};

//POST
export const createUsuarios = async(req, res) => {
    const {Nombre, ApellidoP, ApellidoM, TipoUsu, CantidadLibros} = req.body
    try {
    const [rows] = await pool.query('INSERT INTO Usuarios (Nombre, ApellidoP, ApellidoM, TipoUsu, CantidadLibros) VALUES (?, ?, ?, ?, ?)', 
    [Nombre, ApellidoP, ApellidoM, TipoUsu, CantidadLibros])
    
    res.send({
        idUsuario: rows.insertId,
        Nombre, 
        ApellidoP, 
        ApellidoM, 
        TipoUsu, 
        CantidadLibros
    })

    } catch (error) {
        return res.status(500).json({
            message: 'No jalo'
         });   
    }
};

//GET BY ID
export const getUsuario = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Usuarios WHERE idUsuario= ?', [req.params.idUsuario])

    if(rows.length<=0) return res.status(404).json({
        message: 'No se encuentra'
    })

    res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: 'No jalo'
         })   
    }
}

//DELETE
export const deleteUsuario = async(req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM Usuarios WHERE idUsuario = ?', [req.params.idUsuario])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'No se encuentra'
    })

    res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({
            message: 'No jalo'
         })   
    }
}

//UPDATE
export const updateUsuario = async(req, res) => {
    const {Nombre, ApellidoP, ApellidoM, TipoUsu, CantidadLibros} = req.body
    const {idUsuario} = req.params

    try {
    const [result] = await pool.query('UPDATE Usuarios SET Nombre =IFNULL(?, Nombre), ApellidoP =IFNULL(?, ApellidoP), ApellidoM =IFNULL(?, ApellidoM), TipoUsu =IFNULL(?, TipoUsu), CantidadLibros =IFNULL(?, CantidadLibros) WHERE idUsuario = ?',
    [Nombre, ApellidoP, ApellidoM, TipoUsu, CantidadLibros, idUsuario])

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'No se encuentra'
    })

    const [rows] = await pool.query('SELECT * FROM Usuarios WHERE idUsuario=?', [idUsuario])

    res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: 'No jalo'
         })   
    }
}