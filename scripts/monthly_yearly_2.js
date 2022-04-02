function Monthly_Yearly_2() {
    return `
        <div class="monthlyYearlyButton">
                <p>Monthly</p>
                <div
                    class="toggleBtn"
                    onclick="this.classList.toggle('active')"
                >
                    <div class="innerCircle"></div>
                </div>
                <p>Yearly</p>
            </div>
        `;
}

export default Monthly_Yearly_2;