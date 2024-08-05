import { checkUnsupportTags } from './checkers'
import './styles/main.scss'

const checkBtnEl: HTMLButtonElement = document.querySelector('.check')
const inputEl: HTMLTextAreaElement = document.querySelector('.input')
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
})
