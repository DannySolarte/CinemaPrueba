import Link from 'next/link';

const Footer = () => {
  return (
    <div id="section_footer">
     <div className='text-center py-4'>
       <Link href="/" target="_blank" className='btn-link' type="reset" value="Reset">
         Inicio
       </Link>
        <span>  |  </span>
       <Link href="https://1manstartup.com/terms-and-conditions" target="_blank" className='btn-link'>
        Terminos
       </Link>
       <span>  |  </span>
       <Link href="mailto:Roads<dave@1manstartup.com>" className='btn-link'>
        Contacto
       </Link>
       <p>Copyright © 2023, NinjasDev Inc. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Footer