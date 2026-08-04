import './InfoCard.css'

function InfoCard({ children }) {
  return (
    <article className="info-card">
        {children}
    </article>
  )
}
export default InfoCard