import '../styles/Dashboard.scss'
import '../components/Dashboards/DashboardHead'
import { DashboardHead } from '../components/Dashboards/DashboardHead'
import { DashboardBody } from '../components/Dashboards/DashboardBody'

export const Dashboard: React.FC = () => {
    return (
        <div className="dashBoard">
            <h2 style={{fontFamily: "cursive", fontWeight:"bolder"}}>💕❤ My Love and Joy ❤💕</h2>
            <DashboardHead/>
            <DashboardBody/>
        </div>
    )
}