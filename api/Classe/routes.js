"use strict"

const router = require('express').Router()
const { Classe } = require('../../db/_relations')

router

    /**
     * @descr Create new Classe
     * @route POST /Classe
     * @access public
     */

    .post("/", function createClasse(req, res) {

        Classe.create(req.body)
            .then(data => {res.status(201).json(data)})
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

     /**
     * @descr get all Classe
     * @route GET /Classe
     * @access public
     */

    .get("/", function readClasse(req, res) {

        Classe.findAll({ where: req.query, order: [['id', 'ASC']] })
            .then(data => { res.json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

     /**
     * @descr Show specify Classe
     * @route GET /Classe/id
     * @access public
     */

    .get("/:id", function detailsClasse(req, res) {

        Classe.findByPk(req.params.id)
            .then(data => { 
                if (data !== null) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({ message: "Classe not found" })
                }
             })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

     /**
     * @descr Modify specify Classe
     * @route PUT /Classe/id
     * @access public
     */

    .put("/:id", function updateClasse(req, res) {

        Classe.update(req.body, { where: { id: req.params.id } })
            .then(data => {
                if (data[0] === 1) {
                    res.status(201).json({ message: "Classe updated succefully" })
                } else {
                    res.status(404).json({ message: "Classe not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

     /**
     * @descr Delete specify Classe
     * @route DELETE /Classe/id
     * @access public
     */

    .delete("/:id", function deleteClasse(req, res) {

        Classe.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data === 1) {
                    res.status(201).json({ message: "Classe deleted succefully" })
                } else {
                    res.status(404).json({ message: "Classe not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

module.exports = router
