package farizrifkyb.mini_cmdb.model.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GroupIpRequest {
    @JsonProperty("ip_id")
    private Long ipId;
}
