import * as THREE from 'three'
import './index.css'

let renderer, scene, camera
const rootEl = document.querySelector('#root')

function init() {
  renderer = new THREE.WebGLRenderer({antialias: true})
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, .1, 100)
  rootEl.appendChild(renderer.domElement)
  window.addEventListener('resize', setSize)

  setSize()
  animate()
}

function setSize() {
  camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(innerWidth, innerHeight)
}

function animate() {
  requestAnimationFrame(animate)
  render()
}

function render() {
  renderer.render(scene, camera)
}

init()