function CampoBusca({ valor, aoAlterar }) {
    return (
    <label className="campo-busca">
    <span>Buscar por titulo, autor,
    categoria ou tag</span>
    <input
    type="search"
    value={valor}
    onChange={(evento) =>
    aoAlterar(evento.target.value)}
    placeholder="Exemplo: História, filosofia, ciências sociais"
    />
    </label>
    )
   }
   export default CampoBusca
   
 