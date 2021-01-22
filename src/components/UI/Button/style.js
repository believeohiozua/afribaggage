import styled from 'styled-components'

export const ButtonElem = styled.button`
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
   
  ${p => {
    switch (p.btnType) {
      case 'primary':
        return `
          background: ${p.disabled ? '#808080' : '#F05050'};
          border: 1px solid ${p.disabled ? '#808080' : '#F05050'};
          border-radius: 5px;
          color: #ffffff;
          width: 100%;
          height: 100%;
          padding: 0 13px;
        `
      case 'secondary':
        return `
          border: 2px solid #F05050;
          border-radius: 5px;
          color: #F05050;
          background: #ffffff;
          font-weight: 600;
          width: 100%;
          height: 100%;
          padding: 0 13px;
        `
      case 'getStarted': 
        return `
          background: #F05050;
          border: 1px solid #F05050;
          border-radius: 5px;
          color: #ffffff;
          font-size: 10px;
          width: 86px;
          width: 100%;
          height: 100%;
          padding: 0 13px;
        `
      case 'blue':
        return `
          background: #4378FF;
          border-radius: 5px;
          color: #ffffff;
          padding: 11px;
          border: none;
          text-transform: uppercase;
        `
      case 'bottomFixed':
        return `
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          border: none; 
          text-align: center;
          background: #F05050;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          height: 69px;
          font-size: 18;
          font-weight: 600;
        `
      default: 
        return ''
    }
  }};
`