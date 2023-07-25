import {useState} from 'react'
import {
  AppCard,
  WidthCard,
  Heading,
  Description,
  Img,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMode, setisReadMode] = useState(true)

  const onClickRead = () => {
    setisReadMode(prev => !prev)
  }
  return (
    <AppCard>
      <WidthCard>
        <Heading>React Hooks</Heading>
        <Description>Hooks are a new addition to React</Description>
        <Img
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description className="left">
          {isReadMode
            ? reactHooksDescription.slice(0, 171)
            : reactHooksDescription}
        </Description>
        <Button type="button" onClick={onClickRead}>
          {isReadMode ? 'Read More' : 'Read Less'}
        </Button>
      </WidthCard>
    </AppCard>
  )
}
export default ReadMore
