const Answer = require('../models/answerModel')

getAll = (req, res) => {
  Answer.find({questionId: req.params.questionId}).populate('userId')
  .then(answers => {
    res.send(answers)
  })
  .catch(err => res.status(500).send(err))
}

create = (req, res) => {
  req.body.userId = req.userLogin.id
  Answer.create(req.body)
  .then(answer => {
    res.send(answer)
  })
  .catch(err => res.status(500).send(err))
}

update = (req, res) => {
  
}

remove = (req, res) => {
  Answer.findByIdAndRemove(req.params.id)
  .then(answerDeleted => {
    let answer = {
      status: 'deleted',
      data: answerDeleted
    }
    res.send(answer)
  })
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getAll,
  create,
  update,
  remove
}