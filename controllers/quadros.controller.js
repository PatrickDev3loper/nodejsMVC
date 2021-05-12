'user strict';
const model = require('../models/quadros.model')

exports.listarQuadros = (req, res) => {

    model.getListFrames(cb => {
        res.render('pages/ListarQuadros.ejs', {
            quadros: cb
        })
    })

}

exports.adicionarQuadrosGet = (req, res) => {
    res.render('pages/AdicionarQuadros.ejs')
}

exports.adicionarQuadrosPost = (req, res) => {
    model.addFrame(req.body.nome, req.body.height, req.body.width, req.body.price, req.body.url, cb => {
        res.render('pages/AdicionarQuadros.ejs', {
            isadded: cb
        })
    })
}


exports.editarQuadrosGet = (req, res) => {

    model.getFrame(req.params.id, cb => {

        res.render('pages/EditarQuadros.ejs', {
            quadro: cb
        })

    })
}


exports.editarQuadrosPost = (req, res) => {
    model.editFrame(req.body.id, req.body.nome, req.body.height, req.body.width, req.body.price, req.body.url, pCb => {
        model.getFrame(req.params.id, cb => {
            res.render('pages/EditarQuadros.ejs', {
                quadro: cb,
                isadded: pCb
            })
        })
    })

}


exports.deletarQuadros = (req, res) => {

    model.deleteFrame(req.params.id, dcb => {
        model.getListFrames(cb => {
            res.render('pages/ListarQuadros.ejs', {
                quadros: cb,
                isdeleted: dcb
            })
        })
    })

}