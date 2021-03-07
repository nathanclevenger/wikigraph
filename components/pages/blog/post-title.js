import React from 'react'

const getTitle = (acc, item, index) => {
  if (index > 0) return [...acc, ':', <br key={item} />, item]
  return [...acc, item]
}

export default ({ children }) => {
  return children
    .split(':')
    .reduce(getTitle, [])
    .map(title => <span key={title}>{title}</span>)
}
