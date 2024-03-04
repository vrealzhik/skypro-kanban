import CalendarElement from "../CalendarElement/CalendarElement";
import * as S from "./NewTaskModal.styled";

const NewTaskModal = ({ isOpenNewTask, setIsOpenNewTask, addTask }) => {
  const handleNewTask = () => {
    addTask();
    setIsOpenNewTask(false);
  };
  return (
    <S.PopNewCard $isOpenNewTask={isOpenNewTask} id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock onClick={(e) => e.stopPropagation()}>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.PopNewCardClose onClick={() => setIsOpenNewTask(false)}>
              &#10006;
            </S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.SubTitle htmlFor="formTitle">Название задачи</S.SubTitle>
                  <S.FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.SubTitle htmlFor="textArea">Описание задачи</S.SubTitle>
                  <S.FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <S.CalendarBlock>
                <CalendarElement />
                <input type="hidden" id="datepick_value" value="08.09.2023" />
                <S.CalendarPeriod>
                  <S.CalendarText>
                    Выберите срок исполнения
                    <S.CalendarTextSpan></S.CalendarTextSpan>.
                  </S.CalendarText>
                </S.CalendarPeriod>
              </S.CalendarBlock>
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.PopNewCardCategoriesTitle>
                Категория
              </S.PopNewCardCategoriesTitle>
              <S.CategoriesThemes>
                <S.CategoriesThemeItem $color="_orange">
                  <S.CategoriesThemeItemText>
                    Web Design
                  </S.CategoriesThemeItemText>
                </S.CategoriesThemeItem>
                <S.CategoriesThemeItem $color="_green">
                  <S.CategoriesThemeItemText>
                    Research
                  </S.CategoriesThemeItemText>
                </S.CategoriesThemeItem>
                <S.CategoriesThemeItem $color="_purple">
                  <S.CategoriesThemeItemText>
                    Copywriting
                  </S.CategoriesThemeItemText>
                </S.CategoriesThemeItem>
              </S.CategoriesThemes>
            </S.PopNewCardCategories>
            <S.FormNewCreate id="btnCreate" onClick={handleNewTask}>
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default NewTaskModal;
