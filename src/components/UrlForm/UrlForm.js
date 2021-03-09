import React, { useState } from 'react';

function UrlForm() {

  const [title, setTitle] = useState('')
  const [urlToShorten, setUrl] = useState('')

  const handleInputChange = e => {
    e.target.name === 'title' ?
      setTitle(e.target.value) :
      setUrl(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
  }

  const clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }


  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => handleInputChange(e)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='url'
        value={urlToShorten}
        onChange={e => handleInputChange(e)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )

}

export default UrlForm;
