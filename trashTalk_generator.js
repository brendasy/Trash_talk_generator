function random_phrase(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function trashTalk(target) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let sentence = ''

  if (target === 'engineer') {

    sentence += '工程師' + random_phrase(task.engineer)
  }
  else if (target === 'designer') {

    sentence += '設計師' + random_phrase(task.designer)
  }
  else if (target === 'entrepreneur') {

    sentence += '創業家' + random_phrase(task.entrepreneur)
  }
  else {
    sentence += '不要以為講幹話'
  }

  sentence += random_phrase(phrase)

  return sentence
}



module.exports = trashTalk