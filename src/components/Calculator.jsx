import React, { useState } from 'react';
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
    totalTaxaMoby,
    totalTaxaGasolinaMoby,
    totalTaxaB,
    totalTaxaGasolinaB,
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
    daysWorked: NaN,
    dailyRuns: NaN,
    dailyExpenses: NaN,
    avarageIncome: NaN,
  });

  const toggleModal = () => {
    !isModalOpen ? disableScroll() : enableScroll();
    setIsModalOpen(!isModalOpen);
  };

  const formOnChangeHandler = ({ target: { id, value } }) => {
    setCalculatorForm((prev) => ({
      ...prev,
      [id]: +value,
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
              <p className={diasConcorrente}>00</p>
            </div>

            <div className={inputAreas}>
              <p>Corridas por Dia:</p>
              <p className={corridasConcorrente}>00</p>
            </div>

            <div className={inputAreas}>
              <p>Despesas diárias:</p>
              <p className={consumoConcorrente}>R$0,00</p>
            </div>

            <div className={inputAreas}>
              <p>Valor Médio da Corrida:</p>
              <p className={valorCorridaConcorrente}>R$0,00</p>
            </div>
          </div>
          <div className={results}>
            <div className={inputAreas}>
              <p>Total Bruto:</p>
              <p className={totalBruto}>R$0,00</p>
            </div>
            <div className={inputAreas}>
              <p>Taxa Concorrente A:</p>
              <p className={totalTaxaA}>R$0,00</p>
            </div>
            <div className={inputAreas}>
              <p>Despesas Mensais:</p>
              <p className={despesasMensais}>R$0,00</p>
            </div>
            <div className={inputAreas}>
              <p>Total de ganho líquido:</p>
              <p className={totalTaxaGasolinaA}>R$0,00</p>
            </div>
          </div>
        </div>

        <div className={`${calculator} ${moby}`}>
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
                  id="daysWorked"
                  type='number'
                  onChange={formOnChangeHandler}
                  value={calculatorForm.daysWorked}
                />
              </div>

              <div className={inputArea}>
                <label htmlFor='corridas'>Corridas por dia:</label>
                <input
                  className={corridas}
                  id="dailyRuns"
                  type='number'
                  onChange={formOnChangeHandler}
                  value={calculatorForm.dailyRuns}
                />
              </div>
            </div>

            <div className={inputArea}>
              <label htmlFor='consumo'>Despesas diárias (R$):</label>
              <input
                className={consumo}
                id="dailyExpenses"
                type='number'
                onChange={formOnChangeHandler}
                value={calculatorForm.dailyExpenses}
              />
            </div>

            <div className={inputArea}>
              <label htmlFor='valorCorrida'>Valor médio da corrida (R$):</label>
              <input
                className={valorCorrida}
                id="avarageIncome"
                type='number'
                onChange={formOnChangeHandler}
                value={calculatorForm.avarageIncome}
              />
            </div>
          </div>
          <div className={results}>
            <div className={inputAreas}>
              <p>Total Bruto:</p>
              <p className={totalBruto}>R$0,00</p>
            </div>
            <div className={inputAreas}>
              <p>Taxa Lev Moby:</p>
              <p className={totalTaxaMoby}>R$0,00</p>
            </div>
            <div className={inputAreas}>
              <p>Despesas Mensais:</p>
              <p className={despesasMensais}>R$0,00</p>
            </div>
            <div className={inputAreas}>
              <p>Total de ganho líquido:</p>
              <p className={totalTaxaGasolinaMoby}>R$0,00</p>
            </div>
            <button className={btnCalculate}>Calcular</button>
          </div>

          <Modal
            isModalOpen={isModalOpen}
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
              <p className={diasConcorrente}>00</p>
            </div>

            <div className={inputAreas}>
              <p>Corridas por Dia:</p>
              <p className={corridasConcorrente}>00</p>
            </div>

            <div className={inputAreas}>
              <p>Despesas diárias:</p>
              <p className={consumoConcorrente}>R$0,00</p>
            </div>

            <div className={inputAreas}>
              <p>Valor Médio da Corrida:</p>
              <p className={valorCorridaConcorrente}>R$0,00</p>
            </div>
          </div>
          <div className={results}>
            <div className={inputAreas}>
              <p>Total Bruto:</p>
              <p className={totalBruto}>R$0,00</p>
            </div>
            <div className={inputAreas}>
              <p>Taxa Concorrente B:</p>
              <p className={totalTaxaB}>R$0,00</p>
            </div>
            <div className={inputAreas}>
              <p>Despesas Mensais:</p>
              <p className={despesasMensais}>R$0,00</p>
            </div>
            <div className={inputAreas}>
              <p>Total de ganho líquido:</p>
              <p className={totalTaxaGasolinaB}>R$0,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
