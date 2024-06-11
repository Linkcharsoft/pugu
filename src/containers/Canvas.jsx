import '../styles/containers/Canvas.sass'

import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Canvas({setDone}) {

  const canvasRef = useRef(null)
  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  useEffect(() => {
    // canvas init
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      render()
    })

    // img loading and generation
    const frameCount = 17
    const currentFrame = index => (
      require(`../assets/frames/hero_${(index + 1).toString()}-min.jpg`)
    )

    const images = []
    const pugus = {
      frame: 0
    }

    for (let i = 0; i < frameCount; i++) {
      const img = new Image()
      img.src = currentFrame(i).default
      images.push(img)
    }

    images[0].onload = render

    window.addEventListener('load', event => {
      let image = images[frameCount - 1].complete
      let isLoaded = image.complete && image.naturalHeight !== 0
      setDone('done')
      gsap.to(pugus, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          scrub: 0,
          pin: '.CanvasContainer',
          // markers: true
        },
        onUpdate: render
      })
    })

    // canvas animation
    function render() {
      context.clearRect(canvas.width / 2 - images[pugus.frame].width / 2, 0, images[pugus.frame].width, canvas.height)
      context.drawImage(images[pugus.frame], canvas.width / 2 - images[pugus.frame].width / 2, 0, images[pugus.frame].width, canvas.height)
    }
  }, [])

  return (
    <div className="CanvasContainer" id='Home'>
      <canvas className="Canvas" ref={canvasRef}/>
      <h1 className="CanvasContainer__Title">puguverse.</h1>
    </div>
  )
}

