function useDisplay() {
    const defineRiskLevel = (score, hasExtremeScore) => {
        if (!hasExtremeScore) {
            if (score >= 5) return "red";
            else if (score >= 3) return "yellow";
            return "green";
        }

        return "red";
    };

    return { defineRiskLevel };
}

export default useDisplay;
