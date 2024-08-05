import { checkUnsupportTags, ReturnType } from './checkers'
import { TagNames } from './rules/gmail'
import './styles/main.scss'

const checkBtnEl: HTMLButtonElement = document.querySelector('.check')
const inputEl: HTMLTextAreaElement = document.querySelector('.input')
const outputEl: HTMLDivElement = document.querySelector('.output')
const contentKey = 'input-content'

// khởi tạo giá trị từ localStorage
const initContent = localStorage.getItem(contentKey) || ''
inputEl.value = initContent

// lưu lại giá trị đã nhập vào localStorage
inputEl.addEventListener('input', () => {
  localStorage.setItem(contentKey, inputEl.value)
})

// xử lý nội dung đã nhập khi click vào button kiểm tra
checkBtnEl.addEventListener('click', () => {
  const inputContent = inputEl.value
  const parser = new DOMParser()
  const doc = parser.parseFromString(inputContent, 'text/html')

  const results = checkUnsupportTags(doc)
  console.log(results)
  outputEl.innerHTML = ''
  drawResults(results)
})

const drawResults = (results: ReturnType) => {
  drawGmailCheckResults(results.gmail)
  drawOutlookCheckResults(results.outlook)
}

const drawGmailCheckResults = (gmailResults: ReturnType['gmail']) => {
  const {
    tags,
    css: {
      atRules,
      media: { features, keywords, types },
      properties
    }
  } = gmailResults

  const header = document.createElement('h2')
  header.innerHTML = 'Gmail'

  const ul = document.createElement('ul')
  const li1 = document.createElement('li')
  li1.innerHTML = `Các thẻ HTML không hỗ trợ: ${tags
    .map(tag => createEl(tag, 'code').outerHTML)
    .join(', ')}`

  const li2 = document.createElement('li')
  li2.innerHTML = `Các thuộc tính CSS không hỗ trợ: ${properties
    .map(property => createEl(property, 'code').outerHTML)
    .join(', ')}`

  const li3 = document.createElement('li')
  li3.innerHTML = `Các từ khóa không hỗ trợ: ${types
    .concat(keywords)
    .concat(features)
    .concat(atRules)
    .map(item => createEl(item, 'code').outerHTML)
    .join(',')}`

  ul.appendChild(li1)
  ul.appendChild(li2)
  ul.appendChild(li3)
  outputEl.appendChild(header)
  outputEl.appendChild(ul)
}

const drawOutlookCheckResults = (outlookResults: ReturnType['outlook']) => {
  const {
    tags,
    css: {
      atRules,
      media: { features, keywords, types },
      properties,
      propertiesWithTags
    }
  } = outlookResults

  const header = document.createElement('h2')
  header.innerHTML = 'Outlook'

  const ul = document.createElement('ul')
  const li1 = document.createElement('li')
  li1.innerHTML = `Các thẻ HTML không hỗ trợ: ${tags
    .map(tag => createEl(tag, 'code').outerHTML)
    .join(', ')}`

  const li2 = document.createElement('li')
  li2.innerHTML = `Các thuộc tính CSS không hỗ trợ: ${properties
    .map(property => createEl(property, 'code').outerHTML)
    .join(', ')}`

  const li3 = document.createElement('li')
  li3.innerHTML = 'Các thuộc tính không được hỗ trợ trên thẻ HTML cụ thể:'
  const ul2 = document.createElement('ul')
  Object.keys(propertiesWithTags).forEach(tag => {
    const properties = propertiesWithTags[tag]
    const ili = document.createElement('li')
    ili.innerHTML = `${tag}: ${properties
      .map(property => createEl(property, 'code').outerHTML)
      .join(', ')}`
    ul2.appendChild(ili)
  })

  li3.appendChild(ul2)

  const li4 = document.createElement('li')
  li4.innerHTML = `Các từ khóa không hỗ trợ: ${types
    .concat(keywords)
    .concat(features)
    .concat(atRules)
    .map(item => createEl(item, 'code').outerHTML)
    .join(', ')}`

  ul.appendChild(li1)
  ul.appendChild(li2)
  ul.appendChild(li3)
  ul.appendChild(li4)
  outputEl.appendChild(header)
  outputEl.appendChild(ul)
}

const createEl = (content: string, tag: TagNames[number] = 'div') => {
  const el = document.createElement(tag)
  el.innerHTML = content
  return el
}
