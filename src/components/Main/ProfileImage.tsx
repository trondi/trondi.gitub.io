import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const PROFILE_IMAGE_LINK = 
 'https://avatars.githubusercontent.com/u/42338190?s=400&u=da8964620e8e676ba45ed33fac68bb14e0d1b1f5&v=4';

 const ProfileImageWrapper = styled.img`
    width: 120px;
    height: 120px;
    margin:-bottom: 30px;
    border-radius: 50%;
 `;

 const ProfileImage: FunctionComponent = function () {
     return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
 }

 export default ProfileImage