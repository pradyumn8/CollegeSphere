import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>© {new Date().getFullYear()} Upavan E Library. All rights reserved.</p>
      <ul>
        <li>Terms of Services</li>
        <li>
        <a class="link"
        href="https://linktr.ee/pradyumnv?utm_source=linktree_profile_share&ltsid=d85d51ac-e48e-4bb5-9cd2-51da82d67c8e" target="_blank">
            Developer Profile
          </a>
        </li>
      </ul>

    </div>
  )
}

export default Footer