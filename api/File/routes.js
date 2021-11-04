"use strict"

const router = require('express').Router()
const { File } = require('../../db/_relations')
const Busboy = require('busboy');
const { createWriteStream, createReadStream } = require('fs');
const { cwd } = require('process');
const { join } = require('path');
const { createGzip } = require('zlib')
const sharp = require('sharp')

router

    /**
     * @descr Create new File
     * @route POST /File
     * @access public
     */

    .post("/", async function createFile(req, res) {
        let busboy = new Busboy({ headers: req.headers });
        let fields = {}
        busboy.on('file', async function (fieldname, file, filename, encoding, mimetype) {

            const roundedCornerResizer =
                sharp()
                    .png()
                    .toFile('mailer.png', (err, info) => { })

            file
                .pipe(roundedCornerResizer)




        });
        busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
            fields[fieldname] = val
            console.log('Field [' + fieldname + ']: value: ' + val);
        });
        busboy.on('finish', async function () {
            File.create(fields)
                .then(data => { res.status(201).json(data) })
                .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

            console.log(fields);
        });
        req.pipe(busboy);


    })

    /**
    * @descr get all File
    * @route GET /File
    * @access public
    */

    .get("/", async function readFile(req, res) {
        res.json(require('../../docs/_index'))
    })

    /**
    * @descr Show specify File
    * @route GET /File/id
    * @access public
    */

    .get("/:id", function detailsFile(req, res) {

        File.findByPk(req.params.id)
            .then(data => {
                if (data !== null) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({ message: "File not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Modify specify File
    * @route PUT /File/id
    * @access public
    */

    .put("/:id", function updateFile(req, res) {

        File.update(req.body, { where: { id: req.params.id } })
            .then(data => {
                if (data[0] === 1) {
                    res.status(201).json({ message: "File updated succefully" })
                } else {
                    res.status(404).json({ message: "File not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Delete specify File
    * @route DELETE /File/id
    * @access public
    */

    .delete("/:id", function deleteFile(req, res) {

        File.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data === 1) {
                    res.status(201).json({ message: "File deleted succefully" })
                } else {
                    res.status(404).json({ message: "File not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

module.exports = router
