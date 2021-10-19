const { Router, Request, Reponse } = require('express');
const status = require('./status');

const router = new Router();

const items = [ 'cookie' ];

/**
 * @param {Request} req
 * @param {Response} res
 */
const get = (req, res) => {
    const { nick } = req.query;

    if (!nick) {
        return res.status(status.BAD_REQUEST).send({ message: 'Sem nick enviado' });
    }

    if (items.includes(nick)) {
        return res.status(status.OK).send({ message: 'OK' });
    }

    else if (!items.includes(nick)) {
        return res.status(status.NOT_FOUND).send({ message: `${nick} não encontrado` });
    }
}

router.get('/', get);

module.exports = router;
