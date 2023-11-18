import {pool} from '../db.js'

//GET
export const getLibros = async(req, res) => {
try {
    const [rows] = await pool.query('SELECT * FROM Libros')
    res.json(rows)

} catch (error) {
 return res.status(500).json({
    message: 'No jalo'
 })   
}
}

//POST
export const createLibros = async(req, res) => {
    const {Titulo, Autor, ISBN, Editorial, Anio_Publi, Cant_Disp, Sinopsis, Categorias, Etiquetas} = req.body
    try {
    const [rows] = await pool.query('INSERT INTO Libros (Titulo, Autor, ISBN, Editorial, Anio_Publi, Cant_Disp, Sinopsis, Categorias, Etiquetas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [Titulo, Autor, ISBN, Editorial, Anio_Publi, Cant_Disp, Sinopsis, Categorias, Etiquetas])
    
    res.send({
        idLibro: rows.insertId,
        Titulo, 
        Autor, 
        ISBN, 
        Editorial, 
        Anio_Publi, 
        Cant_Disp, 
        Sinopsis, 
        Categorias, 
        Etiquetas
    })

    } catch (error) {
        return res.status(500).json({
            message: 'No jalo'
         })   
    }
}

//GET BY ID
export const getLibro = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Libros WHERE idLibro= ?', [req.params.idLibro])

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
export const deleteLibro = async(req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM Libros WHERE idLibro = ?', [req.params.idLibro])

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

//UPDATE UPDATE Libros SET ? WHERE idLibro = ?
export const updateLibro = async(req, res) => {
    const {Titulo, Autor, ISBN, Editorial, Anio_Publi, Cant_Disp, Sinopsis, Categorias, Etiquetas} = req.body
    const {idLibro} = req.params

    try {
    const [result] = await pool.query('UPDATE Libros SET Titulo =IFNULL(?, Titulo), Autor =IFNULL(?, Autor), ISBN =IFNULL(?, ISBN), Editorial =IFNULL(?, Editorial), Anio_Publi =IFNULL(?, Anio_Publi), Cant_Disp =IFNULL(?, Cant_Disp), Sinopsis =IFNULL(?, Sinopsis), Categorias =IFNULL(?, Categorias), Etiquetas =IFNULL(?, Etiquetas) WHERE idLibro = ?', 
    [Titulo, Autor, ISBN, Editorial, Anio_Publi, Cant_Disp, Sinopsis, Categorias, Etiquetas, idLibro])

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'No se encuentra'
    })

    const [rows] = await pool.query('SELECT * FROM Libros WHERE idLibro=?', [idLibro])

    res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: 'No jalo'
         })   
    }
}