import styled from 'styled-components'

export const AvatarFieldWrapper = styled.div`
  margin-bottom: 12px;
`

export const PhotoField = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`

export const Label = styled.label`
  width: 160px;
  height: 160px;
  border: 5px solid #FF9494;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 1.59211px 3.18421px 16px rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: ${p => p.croppedAvatar ? `url('${p.croppedAvatar}') no-repeat 0 0/cover` : 'transparent'};
`

export const PhotoImg = styled.img`
  width: 59px;
`

export const Action = styled.span`
  display: block;
  margin-top: 7.5px;
  font-size: 14px;
  font-weight: 500;
  color: #FF9494;
`

export const AddButton = styled.span`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  color: #ffffff;
  background: #F05050;
  position: absolute;
  bottom: -5px;
  right: 0;
`

export const PassportFieldWrapper = styled.div``

export const ErrorMessage = styled.p`
  font-size: 12px;  
  color: #ff0000;
  width: 160px; 
  margin: 10px auto 0; 
  text-align: center;
  
  opacity: ${p => p.isAvatarErrorVisible || p.isPassportErrorVisible ? 1 : 0};
`