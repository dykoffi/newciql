"use strict"

const router = require('express').Router()
const { Ordi } = require('../../db/_relations')

router

    /**
     * @descr Create new Ordi
     * @route POST /Ordi
     * @access public
     */

    .post("/", async (req, res) => {

        Ordi.create(req.body)
            .then(data => { res.status(201).json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr get all Ordi
    * @route GET /Ordi
    * @access public
    */

    .get("/", async (req, res) => {

        Ordi.findAll({ where: req.query, order: [['id', 'ASC']] })
            .then(data => { res.json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Show specify Ordi identified bi id
    * @route GET /Ordi/id
    * @access public
    */

    .get("/:id", async (req, res) => {

        Ordi.findByPk(req.params.id)
            .then(data => {
                if (data !== null) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({ message: "Ordi not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Modify specify Ordi identified bi id
    * @route PUT /Ordi/id
    * @access public
    */

    .put("/:id", async (req, res) => {

        Ordi.update(req.body, { where: { id: req.params.id } })
            .then(data => {
                if (data[0] === 1) {
                    res.status(201).json({ message: "Ordi updated succefully" })
                } else {
                    res.status(404).json({ message: "Ordi not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Delete specify Ordi identified bi id
    * @route DELETE /Ordi/id
    * @access public
    */

    .delete("/:id", async (req, res) => {

        Ordi.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data === 1) {
                    res.status(201).json({ message: "Ordi deleted succefully" })
                } else {
                    res.status(404).json({ message: "Ordi not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

module.exports = router
