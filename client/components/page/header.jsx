import React from 'react'
import {
  Banner,
  Heading,
  Text,
  Button
} from 'rebass'

const Header = () => (
  <Banner
    style={{
      minHeight: '75vh',
      paddingTop: 48,
      backgroundAttachment: 'fixed'
    }}
    backgroundImage='http://www.leadpages.net//assets/imgs/ultimate/banner.jpg'>
    <Heading size={1} big children='HELLO!! :D'/>
    <Text children='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' />
     
      <Button
        big
        children='Call to Action' />
  </Banner>
)


export default Header