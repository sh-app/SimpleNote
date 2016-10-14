import { connect } from 'react-redux';
import Tag from './tag';
import { createTag, getAllTags, getTag, receiveTag } from '../../actions/tag_actions';

const mapStateToProps = ({tags}) => ({
  allTags: tags.allTags
});

const mapDispatchToProps = (dispatch) => ({
  createTag: (tag) => dispatch(createTag(tag)),
  getAllTags: () => dispatch(getAllTags()),
  getTag: (tag_id) => dispatch(getTag(tag_id)),
  receiveTag: (tag) => dispatch(receiveTag(tag))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Tag);
