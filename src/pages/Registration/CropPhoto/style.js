import styled from 'styled-components'

export const AvatarEditorWrapper = styled.div`
  text-align: center;
`

export const PhotoEditorWrapper = styled.div`
  width: 254px;
  margin: 0 auto;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`

export const ScaleRangeWrapper = styled.div``

export const RangeLabel = styled.label`
  text-align: left;
`

export const InputRange = styled.input`
  width: 100%;  
  margin: 18px 0;
  appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #CACACA;
    border-radius: 5px;
  }

  &::-webkit-slider-thumb {
    height: 21px;
    width: 21px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 2px solid #F05050;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
`