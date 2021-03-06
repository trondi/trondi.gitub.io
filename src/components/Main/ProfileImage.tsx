import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
    profileImage: IGatsbyImageData
  }

/*const PROFILE_IMAGE_LINK = 
 'https://avatars.githubusercontent.com/u/42338190?s=400&u=da8964620e8e676ba45ed33fac68bb14e0d1b1f5&v=4';*/

 const ProfileImageWrapper = styled(GatsbyImage)`
    width: 120px;
    height: 120px;
    margin:-bottom: 30px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
      }
 `

 const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
    profileImage,
  }) {
     return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
 }

 export default ProfileImage