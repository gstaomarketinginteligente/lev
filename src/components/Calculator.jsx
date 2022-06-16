import React, { useEffect, useState } from 'react';
import logo from '../images/driver/calculator/logo.svg';
import modalIconInfo from '../images/driver/calculator/info.svg';
import modalIconClose from '../images/driver/calculator/close.svg';
import styles from '../styles/Calculator.module.css';
import Modal from 'react-modal';
import { disableScroll, enableScroll } from '../helpers/scrollHelper';

Modal.setAppElement('#root');

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.6)';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1.8rem',
    borderRadius: '1.5rem',
    border: 'none',
  },
};

function Calculator() {
  const {
    calculatorsWrapper,
    calculators,
    calculator,
    a,
    b,
    moby,
    parameters,
    calculatorHeader,
    image,
    results,
    inputArea,
    inputAreas,
    diasConcorrente,
    corridasConcorrente,
    consumoConcorrente,
    valorCorridaConcorrente,
    totalBruto,
    totalTaxaA,
    despesasMensais,
    totalTaxaGasolinaA,
    info,
    infoIcon,
    openModal,
    totaltaxa,
    totalTaxaGasolinaMoby,
    modal,
    modalHeader,
    closeModal,
    titleSection,
    infoSection,
    infoDescription,
    dias,
    corridas,
    consumo,
    valorCorrida,
    btnCalculate,
  } = styles;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calculatorForm, setCalculatorForm] = useState({
    diasTrabalhados: '',
    corridasDiarias: '',
    gastosDiarios: '',
    valorMedioCorrida: '',
  });
  const [totalBrutoState, setTotalBrutoState] = useState(0.00);
  const [taxa, setTaxa] = useState({
    lev: 0.00,
    a: 0.00,
    b: 0.00,
  });
  const [despesasMensaisState, setDespesasMensaisState] = useState(0.00);
  const [totalLiquidoState, setTotalLiquidoState] = useState({
    lev: 0.00,
    a: 0.00,
    b: 0.00,
  });

  useEffect(() => {
    const wrapper = document.querySelector(`.${calculatorsWrapper}`);
    const { scrollWidth, clientWidth } = wrapper;


    wrapper.scrollLeft = (scrollWidth - clientWidth) / 2;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleModal = () => {
    isModalOpen ? enableScroll() : disableScroll();
    setIsModalOpen(!isModalOpen);
  };

  const formOnChangeHandler = ({ target: { id, value } }) => {
    setCalculatorForm((prev) => ({
      ...prev,
      [id]: +value,
    }));
  };

  const calcularClick = () => {
    const {
      valorMedioCorrida,
      corridasDiarias,
      diasTrabalhados,
      gastosDiarios,
    } = calculatorForm;
    const TAXA_LEV = 0.11;
    const TAXA_A = 0.31;
    const TAXA_B = 0.29;
    const total = valorMedioCorrida * corridasDiarias * diasTrabalhados;
    const taxaLev = total * TAXA_LEV;
    const taxaA = total * TAXA_A;
    const taxaB = total * TAXA_B;
    const despesas = gastosDiarios * diasTrabalhados;
    const liquidoLev = total - taxaLev - despesas;
    const liquidoA = total - taxaA - despesas;
    const liquidoB = total - taxaB - despesas;

    setTotalBrutoState(total.toFixed(2));
    setTaxa((prev) => ({
      ...prev,
      lev: taxaLev.toFixed(2),
      a: taxaA.toFixed(2),
      b: taxaB.toFixed(2),
    }));
    setDespesasMensaisState(despesas.toFixed(2));
    setTotalLiquidoState((prev) => ({
      ...prev,
      lev: liquidoLev.toFixed(2),
      a: liquidoA.toFixed(2),
      b: liquidoB.toFixed(2),
    }));
  };

  return (
    <div className={calculatorsWrapper}>
      <div className={calculators}>
        <div className={`${calculator} ${a}`}>
          <div className={parameters}>
            <div className={calculatorHeader}>
              <div className={image}></div>
              <h4>Concorrente A</h4>
            </div>
            <div className={inputAreas}>
              <p>Dias Trabalhados:</p>
              <p className={diasConcorrente}>
                {calculatorForm.diasTrabalhados}
              </p>
            </div>

            <div className={inputAreas}>
              <p>Corridas por Dia:</p>
              <p className={corridasConcorrente}>
                {calculatorForm.corridasDiarias}
              </p>
            </div>

            <div className={inputAreas}>
              <p>Despesas diárias:</p>
              <p className={consumoConcorrente}>
                {`R$${calculatorForm.gastosDiarios ?? 0}`}
              </p>
            </div>

            <div className={inputAreas}>
              <p>Valor Médio da Corrida:</p>
              <p className={valorCorridaConcorrente}>
                {`R$${calculatorForm.valorMedioCorrida ?? 0}`}
              </p>
            </div>
          </div>
          <div className={results}>
            <div className={inputAreas}>
              <p>Total Bruto:</p>
              <p className={totalBruto}>
                {`R$${totalBrutoState}`}
              </p>
            </div>
            <div className={inputAreas}>
              <p>Taxa Concorrente A:</p>
              <p className={totalTaxaA}>
                {`R$${taxa.a}`}
              </p>
            </div>
            <div className={inputAreas}>
              <p>Despesas Mensais:</p>
              <p className={despesasMensais}>
              {`R$${despesasMensaisState}`}
              </p>
            </div>
            <div className={inputAreas}>
              <p>Total de ganho líquido:</p>
              <p className={totalTaxaGasolinaA}>
              {`R$${totalLiquidoState.a}`}
              </p>
            </div>
          </div>
        </div>


        <div className={`${calculator} ${moby}`}>
          <form onSubmit={ e => e.preventDefault() }>
            <div className={parameters}>
              <div className={calculatorHeader}>
                <div className={image}>
                  <img src={logo} alt='' />
                  <h4>Lev</h4>
                </div>
                <div onClick={toggleModal} className={`${info} ${openModal}`}>
                  <img src={modalIconInfo} className={infoIcon} alt='info' />
                </div>
              </div>

              <div className={inputAreas}>
                <div className={inputArea}>
                  <label htmlFor='dias'>Dias trabalhados:</label>
                  <input
                    className={dias}
                    id='diasTrabalhados'
                    type='number'
                    onChange={formOnChangeHandler}
                    required
                    value={calculatorForm.diasTrabalhados}
                  />
                </div>

                <div className={inputArea}>
                  <label htmlFor='corridas'>Corridas por dia:</label>
                  <input
                    className={corridas}
                    id='corridasDiarias'
                    type='number'
                    onChange={formOnChangeHandler}
                    required
                    value={calculatorForm.corridasDiarias}
                  />
                </div>
              </div>

              <div className={inputArea}>
                <label htmlFor='consumo'>Despesas diárias (R$):</label>
                <input
                  className={consumo}
                  id='gastosDiarios'
                  type='number'
                  onChange={formOnChangeHandler}
                  required
                  value={calculatorForm.gastosDiarios}
                />
              </div>

              <div className={inputArea}>
                <label htmlFor='valorCorrida'>Valor médio da corrida (R$):</label>
                <input
                  className={valorCorrida}
                  id='valorMedioCorrida'
                  type='number'
                  onChange={formOnChangeHandler}
                  required
                  value={calculatorForm.valorMedioCorrida}
                />
              </div>
            </div>
            <div className={results}>
              <div className={inputAreas}>
                <p>Total Bruto:</p>
                <p className={totalBruto}>
                  {`R$${totalBrutoState}`}
                </p>
              </div>
              <div className={inputAreas}>
                <p>Taxa Lev Moby:</p>
                <p className={totaltaxa}>
                  {`R$${taxa.lev}`}
                </p>
              </div>
              <div className={inputAreas}>
                <p>Despesas Mensais:</p>
                <p className={despesasMensais}>
                  {`R$${despesasMensaisState}`}
                </p>
              </div>
              <div className={inputAreas}>
                <p>Total de ganho líquido:</p>
                <p className={totalTaxaGasolinaMoby}>
                  {`R$${totalLiquidoState.lev}`}
                </p>
              </div>
              <button className={btnCalculate} onClick={calcularClick}>
                Calcular
              </button>
            </div>
          </form>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel='My dialog'
            style={customStyles}>
            <div className={modalHeader}>
              <h3>Informações</h3>
              <div onClick={toggleModal} className={closeModal}>
                <img src={modalIconClose} alt='close window' />
              </div>
            </div>
            <div className={infoSection}>
              <p className={titleSection}>Dias Trabalhados</p>
              <p>Quantos dias você pretende trabalhar no mês.</p>
            </div>
            <div className={infoSection}>
              <p className={titleSection}>Quantidade de Corridas por Dia</p>
              <p>Quantas corridas acha que consegue completar por dia.</p>
            </div>
            <div className={infoSection}>
              <p className={titleSection}>Despesas Diárias</p>
              <p>Quanto você gasta em média com gasolina + alimentação.</p>
            </div>
            <div className={infoSection}>
              <p className={titleSection}>Valor Médio da Corrida</p>
              <p>Qual o valor médio das corridas realizadas</p>
            </div>
            <div className={infoSection}>
              <p className={titleSection}>Total Bruto</p>
              <p>O faturamento, sem tirar a taxa da Lev nem o seu gasto.</p>
            </div>
            <div className={infoSection}>
              <p className={titleSection}>Total - Taxa</p>
              <p>Quanto você recebe sem descontar seus gastos.</p>
            </div>
            <div className={infoSection}>
              <p className={titleSection}>Total - Taxa e Gasolina</p>
              <p>Quanto você recebe limpo na sua conta.</p>
            </div>
            <p className={infoDescription}>
              Se tiver mais alguma dúvida, entre em contato conosco.
            </p>
          </Modal>

          <dialog className={modal}></dialog>
        </div>

        <div className={`${calculator} ${b}`}>
          <div className={parameters}>
            <div className={calculatorHeader}>
              <div className={image}></div>
              <h4>Concorrente B</h4>
            </div>
            <div className={inputAreas}>
              <p>Dias Trabalhados:</p>
              <p className={diasConcorrente}>
                {calculatorForm.diasTrabalhados}
              </p>
            </div>

            <div className={inputAreas}>
              <p>Corridas por Dia:</p>
              <p className={corridasConcorrente}>
                {calculatorForm.corridasDiarias}
              </p>
            </div>

            <div className={inputAreas}>
              <p>Despesas diárias:</p>
              <p className={consumoConcorrente}>
                {`R$${calculatorForm.gastosDiarios ?? 0}`}
              </p>
            </div>

            <div className={inputAreas}>
              <p>Valor Médio da Corrida:</p>
              <p className={valorCorridaConcorrente}>
                {`R$${calculatorForm.valorMedioCorrida ?? 0}`}
              </p>
            </div>
          </div>
          <div className={results}>
            <div className={inputAreas}>
              <p>Total Bruto:</p>
              <p className={totalBruto}>
                {`R$${totalBrutoState}`}
              </p>
            </div>
            <div className={inputAreas}>
              <p>Taxa Concorrente B:</p>
              <p className={totalTaxaA}>
                {`R$${taxa.b}`}
              </p>
            </div>
            <div className={inputAreas}>
              <p>Despesas Mensais:</p>
              <p className={despesasMensais}>
              {`R$${despesasMensaisState}`}
              </p>
            </div>
            <div className={inputAreas}>
              <p>Total de ganho líquido:</p>
              <p className={totalTaxaGasolinaA}>
              {`R$${totalLiquidoState.b}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
